package com.chuan.mapper;


import com.chuan.pojo.Admin;

public interface AdminMapper {
 
	public Admin findAdminByUserName(String username) throws Exception;
	
	public void changePassword(Admin admin) throws Exception;
	
	
	
}
