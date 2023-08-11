package solo_project.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import solo_project.Service.UserSerivce;

@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserSerivce userSerivce;
	
}
