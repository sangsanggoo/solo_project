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
	private String userName;
	private String userEmail;
	private String userPassword;
	private int userRole;
	
}
