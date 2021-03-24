package ca.angelastable.controller;

import ca.angelastable.persistence.domain.Cart;
import ca.angelastable.service.CartService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CartController {

    private final Logger log = LoggerFactory.getLogger(CartController.class);

    private CartService service;

    @Autowired
    public CartController(CartService service) {
        this.service = service;
    }

    /**
     * Creates an empty shopping cart
     *
     * @return Cart
     */
    @PostMapping("/")
    public Cart create() {
        log.info("REST request to create shopping cart");
        return service.save(new Cart());
    }

}
