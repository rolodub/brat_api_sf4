<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping\UniqueConstraint;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource
 * @ORM\Table(name="user_post_like",
 *    uniqueConstraints={
 *        @UniqueConstraint(name="post_like",
 *            columns={"user_id", "post_id"})
 *    }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\UserPostLikeRepository")
 *
 */
class UserPostLike
{

    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="User", inversedBy="postLike")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=false)
     */
    protected $userLike;

    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="Like", inversedBy="postLike")
     * @ORM\JoinColumn(name="post_id", referencedColumnName="id", nullable=false)
     */
    protected $postLike;

}
