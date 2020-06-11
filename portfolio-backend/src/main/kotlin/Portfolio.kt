package Portfolio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class Portfolio

fun main(args: Array<String>) {
	runApplication<Portfolio>(*args)
}
