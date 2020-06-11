package tech.blur.bluredu.entity

import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "users")
data class UserEntity(
        @Id
        val name: String,
        val email: String,
        val message: String,
) : Serializable