package pihowich.justin.RecipeRush.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "`Items`", schema = "recipe_db")
public class ItemsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_ID")
    private Integer item_ID;

    @Column(name = "item_name", columnDefinition = "VARCHAR(45)")
    private String item_name;

    @Column(name = "food_group", columnDefinition = "VARCHAR(45)")
    private String food_group;

    // Getters

    public String getItem_name() {
        return item_name;
    }

    public String getFood_group() {
        return food_group;
    }

    @Override
    public String toString() {
        return "ItemsEntity {" +
                "item_ID=" + item_ID +
                ", item_name='" + item_name + '\'' +
                ", food_group='" + food_group + '\'' +
                '}';
    }

}
