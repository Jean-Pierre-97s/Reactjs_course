import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "."

describe('<Button />', () => {
    it('Should render the button with the desired text', () => {
        render(<Button text="Load more"/>);

        expect.assertions(2)
        const button = screen.getByRole('button', {name: /Load more/i})

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('class', 'button')
    })

    it('Should call function on button click', () => {
        const fn = jest.fn()
        render(<Button text="Load more" onClick={fn}/>);

        const button = screen.getByRole('button', {name: /Load more/i})

        fireEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('Should disable the button', () => {
        render(<Button text="Load more" disabled={true}/>);

        const button = screen.getByRole('button', {name: /Load more/i})

        expect(button).toBeDisabled()
    })

    it('Should enable the button', () => {
        render(<Button text="Load more" disabled={false}/>);

        const button = screen.getByRole('button', {name: /Load more/i})

        expect(button).toBeEnabled()
    })

    it('Should match snapshot', () => {
        const { container } = render(<Button text="Load more" disabled={false}/>);

        expect(container).toMatchSnapshot();
    });
})