package com.nexacro.orderBoard.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.orderBoard.mapper.UiadapterBoardMapper;
import com.nexacro.orderBoard.object.Board;
import com.nexacro.orderBoard.service.UidapterBoardService;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * 
 * @title
 * @desc 아래의 예제는 샘플용으로 작성된 코드로 참고용으로만 사용하시기 바랍니다. - UidapterBoardServiceImpl
 *       Sample Class
 * @package com.nexacro.orderBoard.impl
 * 
 *          <pre>
 * 
 * @author TOBESOFT
 * @since 2018. 1. 25.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2018. 1. 25. TOBESOFT
 *      최초작성
 */
@Service
public class UidapterBoardServiceImpl implements UidapterBoardService {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public void insertOrdList(Map<String, Object> ds_regOrd) {
		// TODO Auto-generated method stub
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		
		//1. 작업하기에 앞서 해당 고객이 이미 기존에 TB_CUST 테이블에 있는 경우. 중복으로 insert하는 경우가 생기면 안된다.
		// 	 따라서 고객 명, 휴대폰 번호, 사업자 번호, 주소가 일치하는 고객 코드가 있을 경우 
		// 	 INSERT 하지 않고 고객이 없을 경우만 INSERT 
		
		String custCode = mapper.checkCustDup(ds_regOrd);
		ds_regOrd.put("CUST_CD", custCode);
		
		if("".equals(custCode) || custCode == null) { //중복체크 시 TB_CUST 테이블에 고객이 없다면 
			//신규 고객 등록. 
			mapper.insertCust(ds_regOrd);
			custCode = mapper.checkCustDup(ds_regOrd);
			ds_regOrd.put("CUST_CD", custCode);
		}else {
			//이미 TB_CUST에 등록된 고객이므로 INSERT할 필요가 없다. 
		}
		mapper.insertOrdList(ds_regOrd);
	}
	
	@Override
	public ArrayList<Map<String, Object>> selectItemList() {
		// TODO Auto-generated method stub
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.selectItemList();
	}
	
	@Override
	public ArrayList<Map<String, Object>> selectOrdList(Map<String, Object> ds_searchList) {
		// TODO Auto-generated method stub
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.selectOrdList(ds_searchList);
	}
	
	@Override
	public ArrayList<Map<String, Object>> selectCommonCode(Map<String, Object> ds_search) {
		// TODO Auto-generated method stub
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.selectCommonCode(ds_search);
	}

	@Override
	public List<Board> retrieve_datalist(Board board) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.retrieve_datalist(board);
	}

	@Override
	public List<Map<String, Object>> retrieve_datalist_map(Map<String, String> board) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);
		return mapper.retrieve_datalist_map(board);
	}

	@Override
	public void update_datalist(List<Board> boardList) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);

		int size = boardList.size();
		for (int i = 0; i < size; i++) {
			Board board = boardList.get(i);
			if (board instanceof DataSetRowTypeAccessor) {
				DataSetRowTypeAccessor accessor = board;

				if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
					mapper.insert_board(board);
				} else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
					mapper.update_board(board);
				} else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
					mapper.delete_board(board);
				}
			}
		}
	}

	@Override
	public void update_datalist_map(List<Map<String, Object>> boardList) {
		UiadapterBoardMapper mapper = sqlSession.getMapper(UiadapterBoardMapper.class);

		int size = boardList.size();
		for (int i = 0; i < size; i++) {
			Map<String, Object> board = boardList.get(i);

			int rowType = Integer.parseInt(String.valueOf(board.get(DataSetRowTypeAccessor.NAME)));
			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				mapper.insert_board_map(board);
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
				mapper.update_board_map(board);
			} else if (rowType == DataSet.ROW_TYPE_DELETED) {
				mapper.delete_board_map(board);
			}
		}
	}
}
