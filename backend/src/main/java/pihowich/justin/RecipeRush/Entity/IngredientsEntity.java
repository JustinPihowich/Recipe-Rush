package pihowich.justin.RecipeRush.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "`Ingredients`", schema = "recipe_db")
public class IngredientsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name", columnDefinition = "VARCHAR(45)")
    private String name;

    @Column(name = "food_group", columnDefinition = "VARCHAR(45)")
    private String food_group;

    // Getters and Setters

    public void setIngredient_ID(Integer id) {
        this.id = id;
    }

    public void setIngredient_name(String name) {
        this.name = name;
    }

    public void setFood_group(String food_group) {
        this.food_group = food_group;
    }

    public String getItem_name() {
        return name;
    }

    public String getFood_group() {
        return food_group;
    }

    public Integer getItem_ID() {
        return id;
    }

    @Override
    public String toString() {
        return "ItemsEntity {" +
                "item_ID=" + id +
                ", item_name='" + name + '\'' +
                ", food_group='" + food_group + '\'' +
                '}';
    }

}
