package solo_project.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class User {
	private int userId;
	private String name;
	private String email;
	private String password;
	private int userRole;
	
}
