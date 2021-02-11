<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $article1 = new Article();
        $article1->setTitle("Title 1");
        $article1->setSubtitle("Subtitle 1");
        $article1->setContent("test.");
        $article1->setCategory("cat1");
        $article1->setPublicationDate("2020-05-10");

        $article2 = new Article();
        $article2->setTitle("Title 2");
        $article2->setSubtitle("Subtitle 2");
        $article2->setContent("test2");
        $article2->setCategory("cat2");
        $article2->setPublicationDate("2020-06-10");

        $article3 = new Article();
        $article3->setTitle("Title 3");
        $article3->setSubtitle("Subtitle 3");
        $article3->setContent("test3");
        $article3->setCategory("cat3");
        $article3->setPublicationDate("2020-07-10");

        $article4 = new Article();
        $article4->setTitle("Title 4");
        $article4->setSubtitle("Subtitle 4");
        $article4->setContent("test.");
        $article4->setCategory("cat4");
        $article4->setPublicationDate("2020-08-10");

        $article5 = new Article();
        $article5->setTitle("Title 5");
        $article5->setSubtitle("Subtitle 5");
        $article5->setContent("test");
        $article5->setCategory("cat5");
        $article5->setPublicationDate("2020-09-10");

        $manager->persist($article1);
        $manager->persist($article2);
        $manager->persist($article3);
        $manager->persist($article4);
        $manager->persist($article5);

        $manager->flush();
    }
}
