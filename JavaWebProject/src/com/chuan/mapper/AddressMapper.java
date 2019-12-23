//package com.chuan.mapper;
//
//import com.chuan.pojo.Address;
//import com.chuan.pojo.AddressExample;
//import java.util.List;
//import org.apache.ibatis.annotations.Param;
//
//public interface AddressMapper {
//    int countByExample(AddressExample example);
//
//    int deleteByExample(AddressExample example);
//
//    int insert(Address record);
//
//    int insertSelective(Address record);
//
//    List<Address> selectByExample(AddressExample example);
//
//    int updateByExampleSelective(@Param("record") Address record, @Param("example") AddressExample example);
//
//    int updateByExample(@Param("record") Address record, @Param("example") AddressExample example);
//}