import { Form, Input, Button } from "./Form.styled";

export const SearchForm = ({ setSearchParams }) => {
        const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value });
        form.reset();
  };
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