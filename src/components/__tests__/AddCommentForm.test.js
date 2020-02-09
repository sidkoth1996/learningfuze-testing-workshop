import { AddCommentForm } from '../AddCommentForm'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<AddCommentForm />', () => {
    test('should allow you to submit a comment form', () => {
        //arrange
        const onSubmitForm = jest.fn();

        const helper = render(
            <AddCommentForm
                onSubmitForm={onSubmitForm}
            />
        )
        //act
        const $userInput = helper.getByLabelText("User")

        fireEvent.change($userInput, {target: {value: "Sid"}});

        const $commentInput = helper.getByLabelText("Content")
        fireEvent.change($commentInput, {target: {value: "Comment"}});

        const $submitButton = helper.getByText("Submit")
        fireEvent.click($submitButton)

        //assert
        expect(onSubmitForm).toHaveBeenCalledWith({user: 'Sid', content: 'Comment'})


    })
})