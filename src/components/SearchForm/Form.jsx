import { Form, Input, Button } from "./Form.styled";

export const SearchForm = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name='query' />
            <Button type="submit">
                Search
            </Button>
        </Form>
    )
}