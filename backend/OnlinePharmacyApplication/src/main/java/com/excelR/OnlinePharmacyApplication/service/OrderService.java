package com.excelR.OnlinePharmacyApplication.service;
import com.excelR.OnlinePharmacyApplication.entity.*;
import com.excelR.OnlinePharmacyApplication.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private DrugRepository drugRepository;

    public Order placeOrder(Order order) {
        double total = 0;
        for (OrderItem item : order.getItems()) {
            Drug drug = drugRepository.findById(item.getDrug().getId())
                    .orElseThrow(() -> new RuntimeException("Drug not found"));
            if (drug.getQuantity() < item.getQuantity()) {
                throw new RuntimeException("Not enough stock for drug: " + drug.getName());
            }
            drug.setQuantity(drug.getQuantity() - item.getQuantity());
            item.setPrice(drug.getPrice() * item.getQuantity());
            total += item.getPrice();
            drugRepository.save(drug);
        }
        order.setTotalPrice(total);
        return orderRepository.save(order);
    }

    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}