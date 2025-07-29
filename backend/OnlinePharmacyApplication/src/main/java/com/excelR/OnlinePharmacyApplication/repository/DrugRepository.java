package com.excelR.OnlinePharmacyApplication.repository;
import com.excelR.OnlinePharmacyApplication.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface DrugRepository extends JpaRepository<Drug, Long> {
    Optional<Drug> findByName(String name);
}