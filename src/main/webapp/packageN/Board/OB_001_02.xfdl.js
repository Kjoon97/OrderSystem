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
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_02_02_00","18","11","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","35","46","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문 상품");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","148","49","143","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStatNm","148","18","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","171","85","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgOrd","35","84","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문 수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,140,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	//alert("onload 함수 실행");
        	//alert(this.getOwnerFrame().ordNo);

        	//1. 주문 상태 콤보박스 초기화
        	this.fn_setOrdStatCbo();
        	//2. 주문 상품 콤보박스 초기화
        	this.fn_setItemCbo();
        };

        this.btn_chgOrd_onclick = function(obj,e)
        {
        	//alert("주문 수정 실행");
        	//1. 주문 수정을 위해 입력 받은 2개의 값을 데이터 셋에 담아 서버로 전송해야 한다.
        	// 따라서, 데이터셋을 만들고 사용자가 입력한 2개의 값과 주문 번호를 담아서 서버로 전송해보자.
        	this.ds_updOrd.clearData();
        	this.ds_updOrd.addRow();
        	this.ds_updOrd.setColumn(0,"ORD_STAT_CD", this.cbo_ordStatNm.value);
        	this.ds_updOrd.setColumn(0,"ITEM_CD", this.cbo_itemNm.value);
        	this.ds_updOrd.setColumn(0,"ORD_NO", this.getOwnerFrame().ordNo);

        	trace(this.ds_updOrd.getColumn(0,"ORD_STAT_CD"));
        	trace(this.ds_updOrd.getColumn(0,"ITEM_CD"));
        	trace(this.ds_updOrd.getColumn(0,"ORD_NO"));


        	var strSvcId = "updateOrdList";
            var strSvcUrl = "updateOrdList.do";
        	var inData = "ds_updOrd=ds_updOrd";
        	var outData = "";    //서버로부터 받을 값은 따로 없으니 생략한다.
        	var strAvg = "";
        	var callBackFnc ="fnCallback";

        	this.gfnTransaction(strSvcId,
        						strSvcUrl,
        						inData,
        						outData,
        						strAvg,
        						callBackFnc);     // 서버로 요청이 감.

        };

        this.btn_exit_onclick = function(obj,e)
        {
        	//alert("닫기 실행");
        	this.close();
        };


        /**********************************************************
        * 사용자 정의 함수
        **********************************************************/
        this.fn_setOrdStatCbo = function(){
        	this.ds_searchCombo.clearData();   //데이터 셋을 초기화
        	this.ds_searchCombo.addRow();      //데이터 셋 값을 세팅하기 위해 1줄의 row를 추가함.
        	this.ds_searchCombo.setColumn(0, "CD_VAL", "001");   // 추가된 0번째 "CD_VAL"컬럼에 "001"을 넣자.

        	//서버로 데이터를 전송한다. 그 전에 필요한 값들을 세팅한다.
        	var strSvcId = "selectCommonCode";      //넥사크로에서 트랜잭션을 구분하기 위한 id 값. 이 id 값을 차후 fncallback(후처리) 함수에서 쓰인다.
            var strSvcUrl = "selectCommonCode.do";  //java controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCombo";  // ds_searchCombo(위에서 만든 데이터셋- 프론트엔드)을 ds_search(서버의 맵 객체)에 넣는다.
        	                                         // 서버측(.java)에도 ds_search 데이터 셋명과 반드시 동일하게 명명해야함.
        	var outData = "ds_ordStatCombo=ds_commonCode";  //서버로부터 값을 전달받을 데이터 셋을 세팅하는 것. 서버 데이터셋(dsCommonCode)
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


        /**********************************************************************************
        * CallBack Function (서버 수신 후 후처리 영역)
        *************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0){
        		alert("작업 실패 에러 코드" + errorCode + "\n" + errorMsg);
        		return 0;
        	}
        	switch(svcID)  //svcID: 트랜잭션 아이디.
        	{
        		case "selectCommonCode":
        			this.ds_ordStatCombo.insertRow(0);  //0번째 row에 추가하면 순차적으로 뒤로 밀림.
        			this.ds_ordStatCombo.setColumn(0,"CD_VAL1","");
        			this.ds_ordStatCombo.setColumn(0,"CD_NM1","전체");
        			break;
        		case "updateOrdList":
        			alert("주문 수정 완료");
        			this.close();
        			break;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.sta01_02_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_01_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_chgOrd.addEventHandler("onclick",this.btn_chgOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
