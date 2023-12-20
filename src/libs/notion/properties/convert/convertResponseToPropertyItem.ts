import { convertResponseToCheckboxPropertyItem } from "./checkbox.js";
import { convertResponseToCreatedByPropertyItem } from "./createdBy.js";
import { convertResponseToCreatedTimePropertyItem } from "./createdTime.js";
import { convertResponseToDatePropertyItem } from "./date.js";
import { convertResponseToEmailPropertyItem } from "./email.js";
import { convertResponseToFilesPropertyItem } from "./file.js";
import { convertResponseToFormulaPropertyItem } from "./formula.js";
import { convertResponseToLastEditedByPropertyItem } from "./lastEditedBy.js";
import { convertResponseToLastEditedTimePropertyItem } from "./lastEditedTime.js";
import { convertResponseToMultiSelectPropertyItem } from "./multiSelect.js";
import { convertResponseToNumberPropertyItem } from "./number.js";
import {
  convertListResponseToPeoplePropertyItem,
  convertResponseToPeoplePropertyItem,
} from "./people.js";
import { convertResponseToPhoneNumberPropertyItem } from "./phoneNumber.js";
import {
  convertListResponseToRelationPropertyItem,
  convertResponseToRelationPropertyItem,
} from "./relation.js";
import {
  convertListResponseToRichTextPropertyItem,
  convertResponseToRichTextPropertyItem,
} from "./richText.js";
import {
  convertListResponseToRollupPropertyItem,
  convertResponseToRollupPropertyItem,
} from "./rollup.js";
import { convertResponseToSelectPropertyItem } from "./select.js";
import { convertResponseToStatusPropertyItem } from "./status.js";
import {
  convertListResponseToTitlePropertyItem,
  convertResponseToTitlePropertyItem,
} from "./title.js";
import { convertResponseToUniqueIdPropertyItem } from "./uniqueId.js";
import { convertResponseToUrlPropertyItem } from "./url.js";
import { convertResponseToVerificationPropertyItem } from "./verification.js";

import type { PropertyItem } from "../../../../types/notion/property/properties.js";
import type { GetPagePropertyResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPropertyItem = async (
  pageProperty: GetPagePropertyResponse,
): Promise<PropertyItem> => {
  if (pageProperty.object === "property_item") {
    switch (pageProperty.type) {
      case "checkbox": {
        return convertResponseToCheckboxPropertyItem(pageProperty);
      }
      case "created_by": {
        return convertResponseToCreatedByPropertyItem(pageProperty);
      }
      case "created_time": {
        return convertResponseToCreatedTimePropertyItem(pageProperty);
      }
      case "date": {
        return convertResponseToDatePropertyItem(pageProperty);
      }
      case "email": {
        return convertResponseToEmailPropertyItem(pageProperty);
      }
      case "files": {
        return convertResponseToFilesPropertyItem(pageProperty);
      }
      case "formula": {
        return convertResponseToFormulaPropertyItem(pageProperty);
      }
      case "last_edited_by": {
        return convertResponseToLastEditedByPropertyItem(pageProperty);
      }
      case "last_edited_time": {
        return convertResponseToLastEditedTimePropertyItem(pageProperty);
      }
      case "multi_select": {
        return convertResponseToMultiSelectPropertyItem(pageProperty);
      }
      case "number": {
        return convertResponseToNumberPropertyItem(pageProperty);
      }
      case "people": {
        return convertResponseToPeoplePropertyItem(pageProperty);
      }
      case "phone_number": {
        return convertResponseToPhoneNumberPropertyItem(pageProperty);
      }
      case "relation": {
        return convertResponseToRelationPropertyItem(pageProperty);
      }
      case "rich_text": {
        return convertResponseToRichTextPropertyItem(pageProperty);
      }
      case "rollup": {
        return convertResponseToRollupPropertyItem(pageProperty);
      }
      case "select": {
        return convertResponseToSelectPropertyItem(pageProperty);
      }
      case "status": {
        return convertResponseToStatusPropertyItem(pageProperty);
      }
      case "title": {
        return convertResponseToTitlePropertyItem(pageProperty);
      }
      case "url": {
        return convertResponseToUrlPropertyItem(pageProperty);
      }
      case "unique_id": {
        return convertResponseToUniqueIdPropertyItem(pageProperty);
      }
      case "verification": {
        return convertResponseToVerificationPropertyItem(pageProperty);
      }
      default: {
        return pageProperty;
      }
    }
  }

  if (pageProperty.object === "list") {
    const { property_item, results } = pageProperty;

    switch (property_item.type) {
      case "title": {
        return convertListResponseToTitlePropertyItem({
          ...pageProperty,
          property_item,
          results,
        });
      }
      case "rich_text": {
        return convertListResponseToRichTextPropertyItem({
          ...pageProperty,
          property_item,
          results,
        });
      }
      case "people": {
        return convertListResponseToPeoplePropertyItem({
          ...pageProperty,
          property_item,
          results,
        });
      }
      case "relation": {
        return await convertListResponseToRelationPropertyItem({
          ...pageProperty,
          property_item,
          results,
        });
      }
      case "rollup": {
        return convertListResponseToRollupPropertyItem({
          ...pageProperty,
          property_item,
          results,
        });
      }
    }
  }
  return pageProperty;
};
