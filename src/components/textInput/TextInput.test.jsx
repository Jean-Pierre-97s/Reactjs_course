import { render, screen } from "@testing-library/react";
import { TextInput } from ".";
import userEvent from "@testing-library/user-event";

describe('<TextInput />', () => {
    it('Should have a value of search value', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={'teste'}/>);

        const input = screen.getByPlaceholderText(/Type your search/i)

        expect(input).toBeInTheDocument()
        expect(input.value).toBe('teste')
    });

    it('Should call handle change on each key pressed', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/Type your search/i)
        const value ='valor de teste'

        userEvent.type(input, value)

        expect(input.value).toBe('valor de teste')
        expect(fn).toHaveBeenCalledTimes(value.length)
    });

    

    it('Should match snapshot', () => {
        const { container } = render(<TextInput/>);

        expect(container).toMatchSnapshot();
    });
});
