import { convertResponseToCheckboxPropertyItem } from './checkbox';
import { convertResponseToCreatedByPropertyItem } from './createdBy';
import { convertResponseToCreatedTimePropertyItem } from './createdTime';
import { convertResponseToDatePropertyItem } from './date';
import { convertResponseToEmailPropertyItem } from './email';
import { convertResponseToFilesPropertyItem } from './file';
import { convertResponseToFormulaPropertyItem } from './formula';
import { convertResponseToLastEditedByPropertyItem } from './lastEditedBy';
import { convertResponseToLastEditedTimePropertyItem } from './lastEditedTime';
import { convertResponseToMultiSelectPropertyItem } from './multiSelect';
import { convertResponseToNumberPropertyItem } from './number';
import {
  convertListResponseToPeoplePropertyItem,
  convertResponseToPeoplePropertyItem,
} from './people';
import { convertResponseToPhoneNumberPropertyItem } from './phoneNumber';
import {
  convertListResponseToRelationPropertyItem,
  convertResponseToRelationPropertyItem,
} from './relation';
import {
  convertListResponseToRichTextPropertyItem,
  convertResponseToRichTextPropertyItem,
} from './richText';
import {
  convertListResponseToRollupPropertyItem,
  convertResponseToRollupPropertyItem,
} from './rollup';
import { convertResponseToSelectPropertyItem } from './select';
import { convertResponseToStatusPropertyItem } from './status';
import {
  convertListResponseToTitlePropertyItem,
  convertResponseToTitlePropertyItem,
} from './title';
import { convertResponseToUniqueIdPropertyItem } from './uniqueId';
import { convertResponseToUrlPropertyItem } from './url';
import { convertResponseToVerificationPropertyItem } from './verification';

import type { PropertyItemType } from '@udus/notion-types';
import type { GetPagePropertyResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions } from '../../../types';

export const convertResponseToPropertyItem = async (
  pageProperty: GetPagePropertyResponse,
  options: FetchOptions,
): Promise<PropertyItemType> => {
  if (pageProperty.object === 'property_item') {
    switch (pageProperty.type) {
      case 'checkbox': {
        return convertResponseToCheckboxPropertyItem(pageProperty, options);
      }
      case 'created_by': {
        return convertResponseToCreatedByPropertyItem(pageProperty, options);
      }
      case 'created_time': {
        return convertResponseToCreatedTimePropertyItem(pageProperty, options);
      }
      case 'date': {
        return convertResponseToDatePropertyItem(pageProperty, options);
      }
      case 'email': {
        return convertResponseToEmailPropertyItem(pageProperty, options);
      }
      case 'files': {
        return convertResponseToFilesPropertyItem(pageProperty, options);
      }
      case 'formula': {
        return convertResponseToFormulaPropertyItem(pageProperty, options);
      }
      case 'last_edited_by': {
        return convertResponseToLastEditedByPropertyItem(pageProperty, options);
      }
      case 'last_edited_time': {
        return convertResponseToLastEditedTimePropertyItem(
          pageProperty,
          options,
        );
      }
      case 'multi_select': {
        return convertResponseToMultiSelectPropertyItem(pageProperty, options);
      }
      case 'number': {
        return convertResponseToNumberPropertyItem(pageProperty, options);
      }
      case 'people': {
        return convertResponseToPeoplePropertyItem(pageProperty, options);
      }
      case 'phone_number': {
        return convertResponseToPhoneNumberPropertyItem(pageProperty, options);
      }
      case 'relation': {
        return convertResponseToRelationPropertyItem(pageProperty, options);
      }
      case 'rich_text': {
        return convertResponseToRichTextPropertyItem(pageProperty, options);
      }
      case 'rollup': {
        return convertResponseToRollupPropertyItem(pageProperty, options);
      }
      case 'select': {
        return convertResponseToSelectPropertyItem(pageProperty, options);
      }
      case 'status': {
        return convertResponseToStatusPropertyItem(pageProperty, options);
      }
      case 'title': {
        return convertResponseToTitlePropertyItem(pageProperty, options);
      }
      case 'url': {
        return convertResponseToUrlPropertyItem(pageProperty, options);
      }
      case 'unique_id': {
        return convertResponseToUniqueIdPropertyItem(pageProperty, options);
      }
      case 'verification': {
        return convertResponseToVerificationPropertyItem(pageProperty, options);
      }
      default: {
        throw new Error(`Unsupported property type: ${pageProperty.type}`);
      }
    }
  }

  if (pageProperty.object === 'list') {
    const { property_item, results } = pageProperty;

    switch (property_item.type) {
      case 'title': {
        return convertListResponseToTitlePropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          options,
        );
      }
      case 'rich_text': {
        return convertListResponseToRichTextPropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          options,
        );
      }
      case 'people': {
        return convertListResponseToPeoplePropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          options,
        );
      }
      case 'relation': {
        return await convertListResponseToRelationPropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          options,
        );
      }
      case 'rollup': {
        return convertListResponseToRollupPropertyItem(
          {
            ...pageProperty,
            property_item,
            results,
          },
          options,
        );
      }
    }
  }
  return pageProperty;
};
