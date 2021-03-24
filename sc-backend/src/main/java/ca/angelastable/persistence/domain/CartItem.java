package ca.angelastable.persistence.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cart_item")
public class CartItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Cart cart;

    private Integer quantity;

    private Product product;

}
