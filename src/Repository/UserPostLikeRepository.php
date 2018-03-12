<?php

namespace App\Repository;

use App\Entity\UserPostLike;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserPostLike|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserPostLike|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserPostLike[]    findAll()
 * @method UserPostLike[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserPostLikeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserPostLike::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('u')
            ->where('u.something = :value')->setParameter('value', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
