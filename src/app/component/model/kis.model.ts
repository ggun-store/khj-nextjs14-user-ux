interface IKrxSectionResponse {
    OutBlock_1: IKisSection[];
}

interface IKisAuth {
length: number;
access_token : String,
token_type : String,
expires_in : number,
acess_token_token_expired : String,
}

interface IKisSection {
    length: number;
    rt_cd : String,
    msg_cd :String,
    msg1 :String,
    output1 :Object,
    BSTP_NMIX_PRDY_VRSS:String,
    PRDY_VRSS_SIGN :String,
    BSTP_NMIX_PRDY_CTRT :String,
    PRDY_NMIX:String,
    ACML_VOL:String,
    ACML_TR_PBMN:String,
    HTS_KOR_ISNM : String,
    BSTP_NMIX_PRPR : String,
    BSTP_CLS_CODE:String,
    PRDY_VOL:String,
    BSTP_NMIX_OPRC:String,
    BSTP_NMIX_HGPR:String,
    BSTP_NMIX_LWPR:String,
    FUTS_PRDY_OPRC:String,
    FUTS_PRDY_HGPR:String,
    FUTS_PRDY_LWPR:String,

    output2	: [],
    // STCK_BSOP_DATE	:String,
    // BSTP_NMIX_PRPR	:String,
    // BSTP_NMIX_OPRC:String,
    // BSTP_NMIX_HGPR:String,
    // BSTP_NMIX_LWPR:String,
    // ACML_VOL:String,
    // ACML_TR_PBMN:String,
    // MOD_YN:String,
}