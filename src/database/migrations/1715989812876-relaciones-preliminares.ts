import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacionesPreliminares1715989812876 implements MigrationInterface {
    name = 'RelacionesPreliminares1715989812876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "role" character varying(10) NOT NULL, "img" character varying(100) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(50) NOT NULL, "content" text NOT NULL, "img" character varying(100) NOT NULL, "userId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "replys" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(100) NOT NULL, "content" text NOT NULL, "img" character varying(100) NOT NULL, "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" integer, "userId" integer, CONSTRAINT "PK_2b758e766ed1f1f87d6326a5bce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories_posts_post" ("categoriesId" integer NOT NULL, "postId" integer NOT NULL, CONSTRAINT "PK_29fa49ad9f8199a41dcedd0b941" PRIMARY KEY ("categoriesId", "postId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_54516149beb12196125868b1ab" ON "categories_posts_post" ("categoriesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_83e211b08036c7108516e39ea4" ON "categories_posts_post" ("postId") `);
        await queryRunner.query(`CREATE TABLE "post_categories_categories" ("postId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_ed0ad26bde7c3faf9e782d57a75" PRIMARY KEY ("postId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_274333e07d048c8f8c98ff4c7d" ON "post_categories_categories" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7264924859f333b1642205ff98" ON "post_categories_categories" ("categoriesId") `);
        await queryRunner.query(`CREATE TABLE "post_tags_tags" ("postId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_11a80b010e4e0a1f7cbfa45088e" PRIMARY KEY ("postId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ba037b6fe8bd028a82b3638467" ON "post_tags_tags" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fd01de8916c2da37ddda280846" ON "post_tags_tags" ("tagsId") `);
        await queryRunner.query(`CREATE TABLE "tags_posts_post" ("tagsId" integer NOT NULL, "postId" integer NOT NULL, CONSTRAINT "PK_1110ce09be059e7ff7898f60d41" PRIMARY KEY ("tagsId", "postId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a0b1534ff9870ed60382ee21de" ON "tags_posts_post" ("tagsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a96ef777a2dda67a6f4b938ad8" ON "tags_posts_post" ("postId") `);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "replys" ADD CONSTRAINT "FK_6c5288669c3a10477e49574f29f" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "replys" ADD CONSTRAINT "FK_376999d44caff7a68ce0c71d5eb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories_posts_post" ADD CONSTRAINT "FK_54516149beb12196125868b1abb" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "categories_posts_post" ADD CONSTRAINT "FK_83e211b08036c7108516e39ea4b" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_categories_categories" ADD CONSTRAINT "FK_274333e07d048c8f8c98ff4c7db" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "post_categories_categories" ADD CONSTRAINT "FK_7264924859f333b1642205ff982" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "post_tags_tags" ADD CONSTRAINT "FK_ba037b6fe8bd028a82b36384672" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "post_tags_tags" ADD CONSTRAINT "FK_fd01de8916c2da37ddda2808461" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tags_posts_post" ADD CONSTRAINT "FK_a0b1534ff9870ed60382ee21de2" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tags_posts_post" ADD CONSTRAINT "FK_a96ef777a2dda67a6f4b938ad8c" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags_posts_post" DROP CONSTRAINT "FK_a96ef777a2dda67a6f4b938ad8c"`);
        await queryRunner.query(`ALTER TABLE "tags_posts_post" DROP CONSTRAINT "FK_a0b1534ff9870ed60382ee21de2"`);
        await queryRunner.query(`ALTER TABLE "post_tags_tags" DROP CONSTRAINT "FK_fd01de8916c2da37ddda2808461"`);
        await queryRunner.query(`ALTER TABLE "post_tags_tags" DROP CONSTRAINT "FK_ba037b6fe8bd028a82b36384672"`);
        await queryRunner.query(`ALTER TABLE "post_categories_categories" DROP CONSTRAINT "FK_7264924859f333b1642205ff982"`);
        await queryRunner.query(`ALTER TABLE "post_categories_categories" DROP CONSTRAINT "FK_274333e07d048c8f8c98ff4c7db"`);
        await queryRunner.query(`ALTER TABLE "categories_posts_post" DROP CONSTRAINT "FK_83e211b08036c7108516e39ea4b"`);
        await queryRunner.query(`ALTER TABLE "categories_posts_post" DROP CONSTRAINT "FK_54516149beb12196125868b1abb"`);
        await queryRunner.query(`ALTER TABLE "replys" DROP CONSTRAINT "FK_376999d44caff7a68ce0c71d5eb"`);
        await queryRunner.query(`ALTER TABLE "replys" DROP CONSTRAINT "FK_6c5288669c3a10477e49574f29f"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a96ef777a2dda67a6f4b938ad8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a0b1534ff9870ed60382ee21de"`);
        await queryRunner.query(`DROP TABLE "tags_posts_post"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fd01de8916c2da37ddda280846"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ba037b6fe8bd028a82b3638467"`);
        await queryRunner.query(`DROP TABLE "post_tags_tags"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7264924859f333b1642205ff98"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_274333e07d048c8f8c98ff4c7d"`);
        await queryRunner.query(`DROP TABLE "post_categories_categories"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_83e211b08036c7108516e39ea4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_54516149beb12196125868b1ab"`);
        await queryRunner.query(`DROP TABLE "categories_posts_post"`);
        await queryRunner.query(`DROP TABLE "replys"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
