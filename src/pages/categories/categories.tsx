import { Card, Button, Input, Title } from "../../components";
import { useCategories } from "./useCategories";
import { useIntl } from "react-intl";

export const Categories = () => {
  const { formatMessage } = useIntl();
  const { categorie, error, onChange, onSubmitSave } = useCategories();

  return (
    <Card>
      <Card.Header>
        <Title value="app.categories-title" />
      </Card.Header>
      <Card.Body>
        <form onSubmit={onSubmitSave}>
          <Input
            label="app.category-label"
            name="categorie"
            placeholder="app.category-label"
            type="text"
            value={categorie}
            onChange={({ target }) => onChange(target.value, "categorie")}
          />

          <Button position="br" value="app.button-save" />
          {error.hasError && <div>{formatMessage({ id: error.message })}</div>}
        </form>
      </Card.Body>
    </Card>
  );
};
