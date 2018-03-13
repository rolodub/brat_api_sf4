<?php

namespace App\Repository;

use App\Entity\PostMedia;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method PostMedia|null find($id, $lockMode = null, $lockVersion = null)
 * @method PostMedia|null findOneBy(array $criteria, array $orderBy = null)
 * @method PostMedia[]    findAll()
 * @method PostMedia[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostMediaRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, PostMedia::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('p')
            ->where('p.something = :value')->setParameter('value', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
