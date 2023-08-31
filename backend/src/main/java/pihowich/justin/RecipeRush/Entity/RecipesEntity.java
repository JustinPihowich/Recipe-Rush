package pihowich.justin.RecipeRush.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "`Recipes`", schema = "recipe_db")
public class RecipesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_ID")
    private Integer recipe_ID;

    @Column(name = "recipe_name", columnDefinition = "VARCHAR(45)")
    private String recipe_name;

    @Column(name = "recipe_description", columnDefinition = "VARCHAR(45)")
    private String recipe_description;

    @Column(name = "recipe_ingredients", columnDefinition = "VARCHAR(45)")
    private String recipe_ingredients;

    public String getRecipe_ingredients() {
        return recipe_ingredients;
    }

    @Override
    public String toString() {
        return "RecipesEntity {" +
                "recipe_ID=" + recipe_ID +
                ", recipe_name='" + recipe_name + '\'' +
                ", recipe_description='" + recipe_description + '\'' +
                ", recipe_ingredients='" + recipe_ingredients + '\'' +
                '}';
    }

}
