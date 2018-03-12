<?php

namespace App\Repository;

use App\Entity\UserPostComment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserPostComment|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserPostComment|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserPostComment[]    findAll()
 * @method UserPostComment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserPostCommentsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserPostComment::class);
    }

    /*
    public function findBySomething($value)
    {
        return $this->createQueryBuilder('c')
            ->where('c.something = :value')->setParameter('value', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */
}
