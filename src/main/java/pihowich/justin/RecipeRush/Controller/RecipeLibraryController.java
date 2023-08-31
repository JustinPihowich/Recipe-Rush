package pihowich.justin.RecipeRush.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pihowich.justin.RecipeRush.Entity.ItemsEntity;

import java.util.ArrayList;

@RestController
public class RecipeLibraryController {

    @GetMapping
    public String getRecipeLibrary() {
        return "Recipe Library";
    }

    @GetMapping
    public ArrayList<ItemsEntity> getItems() {
        ArrayList<ItemsEntity> items = new ArrayList<>();
        return items;
    }


}
