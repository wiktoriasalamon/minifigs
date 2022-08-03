import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '../test-utils'
import { rebrickableUrls } from 'api'
import { OrderPageContainer } from 'components/pages/OrderPage/OrderPageContainer'
import logo from '../../public/logo192.png'

const figure = {
  set_num: 'figureId1',
  name: 'Figure 1',
  set_img_url: logo,
}

const parts = [
  {
    part: {
      part_img_url: logo,
      part_num: 'part1',
      name: 'Part 1',
    },
  },
  {
    part: {
      part_img_url: logo,
      part_num: 'part2',
      name: 'Part 2',
    },
  },
]

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_REBRICKABLE_API_URL}${rebrickableUrls.getAllMinifigs()}`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [figure],
        }),
      )
    },
  ),
  rest.get(
    `${process.env.REACT_APP_REBRICKABLE_API_URL}${rebrickableUrls.getPartsOfMinifig(
      figure.set_num,
    )}`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [...parts],
        }),
      )
    },
  ),
)

describe('Order Page', () => {
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())

  it('fetches data and displays random figure and its parts', async () => {
    render(<OrderPageContainer />)
    await waitFor(() => expect(screen.queryByText('Loading')).toBeNull())
    await waitFor(() => expect(screen.findByText(parts[1].part.name)).toBeDefined())

    expect(await screen.findByText(figure.name)).toBeDefined()
  })

  it('fetches figure data without image and displays image placeholder', async () => {
    // change server to return undefined img url
    server.use(
      rest.get(
        `${process.env.REACT_APP_REBRICKABLE_API_URL}${rebrickableUrls.getAllMinifigs()}`,
        (req, res, ctx) => {
          return res.once(
            ctx.json({
              results: [
                {
                  ...figure,
                  set_img_url: undefined,
                },
              ],
            }),
          )
        },
      ),
    )

    render(<OrderPageContainer />)
    await waitFor(() => expect(screen.queryByText('Loading')).toBeNull())
    await waitFor(() => expect(screen.findByText(parts[1].part.name)).toBeDefined())

    expect(await screen.findAllByAltText('Placeholder image')).toHaveLength(1)
  })
})
