package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Materials {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int materialId;
    
    private String materialsName;
    private String materialsDescription;
    private String materialArticle;
    public void setMaterialsdescription(String materialsDescription2) {
    }

}
