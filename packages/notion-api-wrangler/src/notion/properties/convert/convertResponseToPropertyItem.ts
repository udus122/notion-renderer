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

import type { PropertyItemType } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { GetPagePropertyResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPropertyItem = async (
  pageProperty: GetPagePropertyResponse,
  client: Client,
): Promise<PropertyItemType> => {
  if (pageProperty.object === "property_item") {
    switch (pageProperty.type) {
      case "checkbox": {
        return convertResponseToCheckboxPropertyItem(pageProperty, client);
      }
      case "created_by": {
        return convertResponseToCreatedByPropertyItem(pageProperty, client);
      }
      case "created_time": {
        return convertResponseToCreatedTimePropertyItem(pageProperty, client);
      }
      case "date": {
        return convertResponseToDatePropertyItem(pageProperty, client);
      }
      case "email": {
        return convertResponseToEmailPropertyItem(pageProperty, client);
      }
      case "files": {
        return convertResponseToFilesPropertyItem(pageProperty, client);
      }
      case "formula": {
        return convertResponseToFormulaPropertyItem(pageProperty, client);
      }
      case "last_edited_by": {
        return convertResponseToLastEditedByPropertyItem(pageProperty, client);
      }
      case "last_edited_time": {
        return convertResponseToLastEditedTimePropertyItem(
          pageProperty,
          client,
        );
      }
      case "multi_select": {
        return convertResponseToMultiSelectPropertyItem(pageProperty, client);
      }
      case "number": {
        return convertResponseToNumberPropertyItem(pageProperty, client);
      }
      case "people": {
        return convertResponseToPeoplePropertyItem(pageProperty, client);
      }
      case "phone_number": {
        return convertResponseToPhoneNumberPropertyItem(pageProperty, client);
      }
      case "relation": {
        return convertResponseToRelationPropertyItem(pageProperty, client);
      }
      case "rich_text": {
        return convertResponseToRichTextPropertyItem(pageProperty, client);
      }
      case "rollup": {
        return convertResponseToRollupPropertyItem(pageProperty, client);
      }
      case "select": {
        return convertResponseToSelectPropertyItem(pageProperty, client);
      }
      case "status": {
        return convertResponseToStatusPropertyItem(pageProperty, client);
      }
      case "title": {
        return convertResponseToTitlePropertyItem(pageProperty, client);
      }
      case "url": {
        return convertResponseToUrlPropertyItem(pageProperty, client);
      }
      case "unique_id": {
        return convertResponseToUniqueIdPropertyItem(pageProperty, client);
      }
      case "verification": {
        return convertResponseToVerificationPropertyItem(pageProperty, client);
      }
      case "button": 
      default: {
        throw new Error(`Unsupported property type: ${pageProperty.type}`);
      }
    }
  }

  if (pageProperty.object === "list") {
    const { property_item, results } = pageProperty;

    switch (property_item.type) {
      case "title": {
        return convertListResponseToTitlePropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          client,
        );
      }
      case "rich_text": {
        return convertListResponseToRichTextPropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          client,
        );
      }
      case "people": {
        return convertListResponseToPeoplePropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          client,
        );
      }
      case "relation": {
        return await convertListResponseToRelationPropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          client,
        );
      }
      case "rollup": {
        return convertListResponseToRollupPropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          client,
        );
      }
    }
  }
  return pageProperty;
};
