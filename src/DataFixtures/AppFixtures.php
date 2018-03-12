<?php
/**
 * Created by PhpStorm.
 * User: rolandduboue
 * Date: 27/02/2018
 * Time: 21:21
 */

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // create 20 users! Bam!
        for ($i = 0; $i < 1; $i++) {
            $user = new User();
            $user->setUsername('roro');
            //password = roropass
            $user->setPassword('$2y$10$K40Rz8hhZUP/meGpoq/VuerDD4GXhEXGKrZ8gvljGsyrjyUth55Mq');
            $user->setEmail('roro@gmail.com');
            $user->setApiToken('apitoken');
            $manager->persist($user);
        }

        $manager->flush();
    }
}