package com.bhaskar.ecmapp;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.bhaskar.ecmapp");

        noClasses()
            .that()
            .resideInAnyPackage("com.bhaskar.ecmapp.service..")
            .or()
            .resideInAnyPackage("com.bhaskar.ecmapp.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.bhaskar.ecmapp.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
