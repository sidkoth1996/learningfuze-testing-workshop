import { Input } from '../Input'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Input />', () => {
    test("should render the input", () => {
        //arrange
        //act
        const helpers = render(
            <Input id="test" label="Test" value="Hahaha this is a test" onChange={() => {}}/>
        )
    
        const $input = helpers.getByLabelText('Test')
        
        //assert
        expect($input).toBeInTheDocument()
        expect($input).toHaveAttribute('value', 'Hahaha this is a test')
    
    })

    test("should fire onChange prop when a change event happens of the input", () => {
        //arrange
        const onChange = jest.fn();
        //act

        const helper = render(
            <Input id="test" label="Test" value="Hahaha" onChange={onChange} />
        )

        const $input = helper.getByLabelText('Test')

        fireEvent.change($input, {target: { value: '12345'}} )
        //assert
        expect(onChange).toHaveBeenCalledTimes(1)
    })

})
