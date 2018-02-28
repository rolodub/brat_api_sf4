<?php

namespace App\Repository;

use App\Entity\Testage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Testage|null find($id, $lockMode = null, $lockVersion = null)
 * @method Testage|null findOneBy(array $criteria, array $orderBy = null)
 * @method Testage[]    findAll()
 * @method Testage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TestageRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Testage::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('t')
            ->where('t.something = :value')->setParameter('value', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
