import { provincesData, districtsData, wardsData } from './vietnamAddressesData';

export interface Province {
  code: string;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
}

export interface District {
  code: string;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
  province_code: string;
}

export interface Ward {
  code: string;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  code_name: string;
  district_code: string;
}

// Offline dataset

export const getProvinces = async (): Promise<Province[]> => {
  return provincesData.map((p) => ({
    code: p.code,
    name: p.name,
    name_en: '',
    full_name: p.name,
    full_name_en: '',
    code_name: '',
  }));
};

export const getDistrictsByProvince = async (provinceCode: string): Promise<District[]> => {
  return districtsData
    .filter((d) => d.province_code === provinceCode)
    .map((d) => ({
      code: d.code,
      name: d.name,
      name_en: '',
      full_name: d.name,
      full_name_en: '',
      code_name: '',
      province_code: d.province_code,
    }));
};

export const getWardsByDistrict = async (districtCode: string): Promise<Ward[]> => {
  return wardsData
    .filter((w) => w.district_code === districtCode)
    .map((w) => ({
      code: w.code,
      name: w.name,
      name_en: '',
      full_name: w.name,
      full_name_en: '',
      code_name: '',
      district_code: w.district_code,
    }));
};

