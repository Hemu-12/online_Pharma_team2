package com.excelR.OnlinePharmacyApplication.service;
import com.excelR.OnlinePharmacyApplication.entity.Drug;
import com.excelR.OnlinePharmacyApplication.repository.DrugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrugService {

    @Autowired
    private DrugRepository drugRepository;

    public Drug addDrug(Drug drug) {
        return drugRepository.save(drug);
    }

    public List<Drug> getAllDrugs() {
        return drugRepository.findAll();
    }

    public Drug getDrugById(Long id) {
        return drugRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Drug not found"));
    }

    public void deleteDrug(Long id) {
        drugRepository.deleteById(id);
    }

    public Drug updateDrug(Long id, Drug drugDetails) {
        Drug drug = drugRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Drug not found"));
        drug.setName(drugDetails.getName());
        drug.setDescription(drugDetails.getDescription());
        drug.setQuantity(drugDetails.getQuantity());
        drug.setPrice(drugDetails.getPrice());
        return drugRepository.save(drug);
    }
}