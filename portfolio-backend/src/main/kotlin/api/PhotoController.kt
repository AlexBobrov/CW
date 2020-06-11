package Portfolio

import io.swagger.annotations.Api
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import Portfolio.core.BaseResponseEntity
import Portfolio.domain.Photo
import Portfolio.PhotService

@Api(tags = ["photos"])
@CrossOrigin(origins = ["*"], allowedHeaders = ["*"])
@RestController("PhotController")
class PhotController @Autowired constructor(
        val eventService: PhotService
) {

    @ResponseBody
    @GetMapping("$PHOT_ROOT/GetAll")
    fun getAllEvents(): BaseResponseEntity<List<Photos>> = BaseResponseEntity(eventService.getAllPhotos())


    companion object {
        const val PHOT_ROOT = "Photos"
    }
}