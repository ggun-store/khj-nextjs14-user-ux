interface IKrxResponse {
    length: number;
    OutBlock_1: IKrx[];
}

interface IKrx {
    BAS_DD: string,
    IDX_CLSS: string,
    IDX_NM: string,
    CLSPRC_IDX: string,
    CMPPREVDD_IDX: string,
    FLUC_RT: string,
    OPNPRC_IDX: string,
    HGPRC_IDX: string,
    LWPRC_IDX: string,
    ACC_TRDVOL: string,
    ACC_TRDVAL: string,
    MKTCAP: string
}