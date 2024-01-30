(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCustGB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGbCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_02","18","24","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","159","33","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_00","-2","88","159","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생년월일/사업자번호");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_birBizNo","159","92","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_01","18","58","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("휴대폰번호");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","159","63","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_02","15","115","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","159","122","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_02_00","17","144","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("고객 구분");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","34","179","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","158","182","143","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGb","159","150","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_custGbCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","166","225","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","30","225","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문 등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,290,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	//alert("onload 이벤트 실행");
        	//주문 등록을 위한 고객구분, 주문상품 콤보박스 초기화

        	//1. 고객구분 콤보박스에 출력할 데이터들을 TB_CD_MST 테이블로부터 값을 조회해오자.
        	//OB_001.xfdl onload에서 만든 로직 활용하면된다.
        	this.fn_setCustGbCbo();

        	//2. 주문 상품 리스트를 TB_ITEM 테이블로부터 조회하여 콤보박스 안의 데이터를 채워주자.
        	this.fn_setItemCbo();

        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	alert("주문 등록 버튼 실행");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	alert("닫기 실행");
        };

        /*************************************************
        * 사용자 정의 함수
        **************************************************/

        this.fn_setCustGbCbo = function(){

        	//ds_searchcombo 데이터셋을 생성하고 서버로 전달할 인자값을 추가해보자.
        	this.ds_searchCustGB.clearData();   //데이터 셋을 초기화
        	this.ds_searchCustGB.addRow();      //데이터 셋 값을 세팅하기 위해 1줄의 row를 추가함.
        	this.ds_searchCustGB.setColumn(0, "CD_VAL", "002");   // 추가된 0번째 "CD_VAL"컬럼에 "002"을 넣자.

        	//서버로 데이터를 전송한다. 그 전에 필요한 값들을 세팅한다.
        	var strSvcId = "selectCommonCode";      //넥사크로에서 트랜잭션을 구분하기 위한 id 값. 이 id 값을 차후 fncallback(후처리) 함수에서 쓰인다.
            var strSvcUrl = "selectCommonCode.do";  //java controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCustGB";  // ds_searchCombo(위에서 만든 데이터셋- 프론트엔드)을 ds_search(서버의 맵 객체)에 넣는다.
        	                                         // 서버측(.java)에도 ds_search 데이터 셋명과 반드시 동일하게 명명해야함.
        	var outData = "ds_custGbCombo=ds_commonCode";  //서버로부터 값을 전달받을 데이터 셋을 세팅하는 것. 서버 데이터셋(dsCommonCode)
        	var strAvg = "";                          //데이터셋이 아닌 값을 보낼때 쓰는 필드지만, 데이터 셋을 쓰는 것으로 통일하자.
        	var callBackFnc ="fnCallback";            // 서버로부터 값을 받은 이후 프론트에서 이행할 작업 코드를 fnCallback 함수에서 작성한다.

        	this.gfnTransaction(strSvcId,
        						strSvcUrl,
        						inData,
        						outData,
        						strAvg,
        						callBackFnc);     // 서버로 요청이 감.
        }

        this.fn_setItemCbo = function(){

        	var strSvcId = "selectItemList";
            var strSvcUrl = "selectItemList.do";
        	var inData = "";   //따로 서버에 전송할 데이터가 없음.

        	var outData = "ds_itemCombo=ds_itemCombo";
        	var strAvg = "";
        	var callBackFnc ="fnCallback";

        	this.gfnTransaction(strSvcId,
        						strSvcUrl,
        						inData,
        						outData,
        						strAvg,
        						callBackFnc);     // 서버로 요청이 감.

        }

        /********************************************
        * CallBack Function(서버 수신 후 후처리 영역)
        **********************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg){
        	switch(svcID) {
        		case "selectCommonCode":
        			trace("고객구분 콤보박스 세팅 완료"); //로그
        			break;

        		case "selectItemList":
        			trace("주문 상품 콤보박스 세팅 완료");
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.sta01_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_01.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_01_onclick,this);
            this.cbo_custGb.addEventHandler("onitemchanged",this.cbo_custGb_onitemchanged,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
