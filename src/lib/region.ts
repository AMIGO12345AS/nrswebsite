export type Region = "india";

export function detectRegion(): Region {
  return "india";
}

export function getOtherRegion(region: Region): Region {
  return region;
}
