package ca.angelastable.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CartController {

    private final Logger log = LoggerFactory.getLogger(CartController.class);

    @PostMapping("/")
    public void create() {
        log.info("REST request to create shopping cart");
    }

}
