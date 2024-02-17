-- Property type
CREATE TYPE property_category AS ENUM ("Apartment", "House", "Condo", "Townhouse", "Lake", "Countryside", "Modern","Lux", "Other");


-- CreateTable
CREATE TABLE "tbl_house_mate" (
    "agreement_details" VARCHAR(255),
    "housemate_id" SERIAL NOT NULL,
    "preferences" VARCHAR(255),
    "user_id" SERIAL NOT NULL,

    CONSTRAINT "tbl_house_mate_pkey" PRIMARY KEY ("housemate_id")
);

-- CreateTable
CREATE TABLE "tbl_maintenance" (
    "description" VARCHAR(255),
    "issue_id" SERIAL NOT NULL,
    "property_id" SERIAL NOT NULL,
    "status" VARCHAR(255),

    CONSTRAINT "tbl_maintenance_pkey" PRIMARY KEY ("issue_id")
);

-- CreateTable
CREATE TABLE "tbl_property" (
    "additional_bills" VARCHAR(255),
    "availability" VARCHAR(255),
    "category" property_category,
    "not_allowed" VARCHAR(255),
    "property_address" VARCHAR(255),
    "property_description" VARCHAR(255),
    "property_id" SERIAL NOT NULL,
    "property_image" BYTEA,
    "property_name" VARCHAR(255),
    "property_type" VARCHAR(255),
    "rental_price" VARCHAR(255),
    "rental_terms" VARCHAR(255),
    "timestamp" TIME(6),
    "user_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

    CONSTRAINT "tbl_property_pkey" PRIMARY KEY ("property_id")
);

-- CreateTable
CREATE TABLE "tbl_rental_agreement" (
    "agreement_id" SERIAL NOT NULL,
    "invoices" VARCHAR(255),
    "property_id" SERIAL NOT NULL,
    "user_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

    CONSTRAINT "tbl_rental_agreement_pkey" PRIMARY KEY ("agreement_id")
);

-- CreateTable
CREATE TABLE "tbl_support" (
    "support_id" SERIAL NOT NULL,
    "user_id" SERIAL NOT NULL,
    "issue_details" VARCHAR(255),
    "resolution" VARCHAR(255),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

    CONSTRAINT "tbl_support_pkey" PRIMARY KEY ("support_id")
);

-- CreateTable
CREATE TABLE "tbl_user" (
    "academic_institution" VARCHAR(255),
    "address" VARCHAR(255),
    "contact" VARCHAR(255),
    "email" VARCHAR(255),
    "name" VARCHAR(255),
    "picture" BYTEA,
    "rating" VARCHAR(255),
    "status" VARCHAR(255),
    "user_id" SERIAL NOT NULL,
    "user_type" VARCHAR(255),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 


    CONSTRAINT "tbl_user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "tbl_verification" (
    "verification_id" SERIAL NOT NULL,
    "user_id" SERIAL NOT NULL,
    "verified_status" VARCHAR(255),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

    CONSTRAINT "tbl_verification_pkey" PRIMARY KEY ("verification_id")
);

-- AddForeignKey
ALTER TABLE "tbl_house_mate" ADD CONSTRAINT "user_id_foreign_key" FOREIGN KEY ("user_id") REFERENCES "tbl_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_maintenance" ADD CONSTRAINT "property_id_foreign_key" FOREIGN KEY ("property_id") REFERENCES "tbl_property"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_property" ADD CONSTRAINT "user_id_foreign_key" FOREIGN KEY ("user_id") REFERENCES "tbl_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_rental_agreement" ADD CONSTRAINT "property_id_foreign_key" FOREIGN KEY ("property_id") REFERENCES "tbl_property"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_rental_agreement" ADD CONSTRAINT "user_id_foreign_key" FOREIGN KEY ("user_id") REFERENCES "tbl_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_support" ADD CONSTRAINT "user_id_foreign_key" FOREIGN KEY ("user_id") REFERENCES "tbl_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tbl_verification" ADD CONSTRAINT "user_id_foreign_key" FOREIGN KEY ("user_id") REFERENCES "tbl_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
