package pihowich.justin.RecipeRush.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pihowich.justin.RecipeRush.Entity.IngredientsEntity;

import java.util.List;

@RestController
public class ItemLibraryController {

    @GetMapping("/test")
    public ResponseEntity<List<IngredientsEntity>> ingredientsTest() {
        IngredientsEntity ingredientsEntityTest1 = new IngredientsEntity();
        IngredientsEntity ingredientsEntityTest2 = new IngredientsEntity();
        IngredientsEntity ingredientsEntityTest3 = new IngredientsEntity();

        ingredientsEntityTest1.setIngredient_ID(1);
        ingredientsEntityTest1.setIngredient_name("test1");
        ingredientsEntityTest1.setFood_group("test1");

        ingredientsEntityTest2.setIngredient_ID(2);
        ingredientsEntityTest2.setIngredient_name("test2");
        ingredientsEntityTest2.setFood_group("test2");

        ingredientsEntityTest3.setIngredient_ID(3);
        ingredientsEntityTest3.setIngredient_name("test3");
        ingredientsEntityTest3.setFood_group("test3");

        List<IngredientsEntity> ingredientsEntities = List.of(ingredientsEntityTest1, ingredientsEntityTest2, ingredientsEntityTest3);
        return new ResponseEntity<>(ingredientsEntities, HttpStatus.OK);
    }
}
