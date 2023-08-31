package pihowich.justin.RecipeRush.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "`SavedRecipes`", schema = "recipe_db")
public class SavedRecipesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "saved_recipe_ID")
    private Integer saved_recipe_ID;

    @Column(name = "recipe_ID", columnDefinition = "INT")
    private Integer recipe_ID;

    @Column(name = "user_ID", columnDefinition = "INT")
    private Integer user_ID;

}
