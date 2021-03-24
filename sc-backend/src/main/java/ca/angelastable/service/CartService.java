package ca.angelastable.service;

import ca.angelastable.persistence.CartRepository;
import ca.angelastable.persistence.domain.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CartService {

    private final CartRepository repository;

    @Autowired
    public CartService(CartRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Cart save(Cart cart) {
        return repository.save(cart);
    }

}
