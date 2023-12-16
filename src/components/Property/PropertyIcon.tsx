import type { DatabaseObject } from "../../types/notion/database.js";
import type { PropertyItem } from "../../types/notion/pages/properties/properties.js";
import type { FC } from "react";

type Props = {
  propertyItem: PropertyItem | DatabaseObject["properties"][string];
};

export const PropertyIcon: FC<Props> = ({ propertyItem }) => {
  switch (propertyItem.type) {
    case "title": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="notion-property-icon typesTitle"
        >
          <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
        </svg>
      );
    }
    case "rich_text": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"></path>
        </svg>
      );
    }
    case "number": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M2.4834 10.9902H4.33594L3.75488 13.8887C3.74121 13.9639 3.72754 14.0664 3.72754 14.1416C3.72754 14.5381 3.99414 14.7637 4.39746 14.7637C4.81445 14.7637 5.09473 14.5449 5.18359 14.1143L5.80566 10.9902H8.79297L8.21191 13.8887C8.19824 13.9639 8.18457 14.0664 8.18457 14.1416C8.18457 14.5381 8.45117 14.7637 8.85449 14.7637C9.27148 14.7637 9.55176 14.5449 9.63379 14.1143L10.2627 10.9902H12.4502C12.9287 10.9902 13.2432 10.6758 13.2432 10.2109C13.2432 9.8418 12.9902 9.56836 12.6006 9.56836H10.5498L11.2129 6.28711H13.3662C13.8379 6.28711 14.1523 5.96582 14.1523 5.50098C14.1523 5.13184 13.9062 4.8584 13.5098 4.8584H11.5L12.0195 2.27441C12.0264 2.21973 12.0469 2.11035 12.0469 2.01465C12.0469 1.625 11.7666 1.39258 11.3633 1.39258C10.9053 1.39258 10.6797 1.63867 10.5977 2.05566L10.0303 4.8584H7.04297L7.5625 2.27441C7.57617 2.21973 7.58984 2.11035 7.58984 2.01465C7.58984 1.625 7.30957 1.39258 6.91309 1.39258C6.44824 1.39258 6.21582 1.63867 6.13379 2.05566L5.57324 4.8584H3.54297C3.06445 4.8584 2.75 5.18652 2.75 5.65137C2.75 6.03418 3.00293 6.28711 3.39258 6.28711H5.28613L4.62305 9.56836H2.63379C2.15527 9.56836 1.84082 9.89648 1.84082 10.3613C1.84082 10.7373 2.09375 10.9902 2.4834 10.9902ZM6.09277 9.56836L6.75586 6.28711H9.74316L9.08008 9.56836H6.09277Z"></path>
        </svg>
      );
    }
    case "checkbox": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M3.85742 14.4561H12.1357C13.6123 14.4561 14.3779 13.6904 14.3779 12.2344V3.91504C14.3779 2.45215 13.6123 1.69336 12.1357 1.69336H3.85742C2.38086 1.69336 1.61523 2.45215 1.61523 3.91504V12.2344C1.61523 13.6973 2.38086 14.4561 3.85742 14.4561ZM3.93945 13.1162C3.30371 13.1162 2.95508 12.7812 2.95508 12.1182V4.02441C2.95508 3.36133 3.30371 3.0332 3.93945 3.0332H12.0537C12.6826 3.0332 13.0381 3.36133 13.0381 4.02441V12.1182C13.0381 12.7812 12.6826 13.1162 12.0537 13.1162H3.93945ZM7.26855 11.3115C7.51465 11.3115 7.72656 11.1885 7.87012 10.9697L10.9258 6.19141C11.0146 6.04785 11.0967 5.88379 11.0967 5.72656C11.0967 5.3916 10.7959 5.16602 10.4746 5.16602C10.2695 5.16602 10.085 5.27539 9.94141 5.50781L7.24121 9.8418L5.96973 8.2;2168C5.80566 8.00977 5.6416 7.93457 5.43652 7.93457C5.10156 7.93457 4.8418 8.20117 4.8418 8.54297C4.8418 8.70703 4.90332 8.85742 5.01953 9.00098L6.63281 10.9697C6.81738 11.209 7.01562 11.3115 7.26855 11.3115Z"></path>
        </svg>
      );
    }
    case "created_by": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 10.4229C6.05176 10.4229 4.54785 11.1133 3.83008 11.9131C2.90039 10.9082 2.33301 9.55469 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 9.55469 13.1064 10.9082 12.1699 11.9131C11.4521 11.1133 9.94824 10.4229 8 10.4229ZM8 9.30176C9.32617 9.30859 10.3516 8.18066 10.3516 6.71094C10.3516 5.33008 9.31934 4.18164 8 4.18164C6.6875 4.18164 5.6416 5.33008 5.64844 6.71094C5.65527 8.18066 6.68066 9.28809 8 9.30176Z"></path>
        </svg>
      );
    }
    case "created_time": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.54102 8.91211H7.99316C8.30078 8.91211 8.54004 8.67285 8.54004 8.37207V3.8877C8.54004 3.58691 8.30078 3.34766 7.99316 3.34766C7.69238 3.34766 7.45312 3.58691 7.45312 3.8877V7.83203H4.54102C4.2334 7.83203 4.00098 8.06445 4.00098 8.37207C4.00098 8.67285 4.2334 8.91211 4.54102 8.91211Z"></path>
        </svg>
      );
    }
    case "date": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z"></path>
        </svg>
      );
    }
    case "email": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M0.870117 8.40625C0.870117 12.8975 3.93262 15.6523 8.19824 15.6523C9.31934 15.6523 10.3242 15.5088 10.9463 15.3037C11.3975 15.1533 11.5547 14.9141 11.5547 14.6338C11.5547 14.3398 11.3428 14.1279 11.0283 14.1279C10.9326 14.1279 10.8164 14.1416 10.6797 14.1689C9.94141 14.3398 9.29883 14.4629 8.42383 14.4629C4.69141 14.4629 2.18262 12.2207 2.18262 8.44727C2.18262 4.81055 4.56836 2.28125 8.12988 2.28125C11.3223 2.28125 13.8926 4.26367 13.8926 7.74316C13.8926 9.69141 13.2363 11.0039 12.1904 11.0039C11.4932 11.0039 11.0967 10.5801 11.0967 9.85547V5.4668C11.0967 5.03613 10.8574 4.77637 10.4473 4.77637C10.0371 4.77637 9.79102 5.03613 9.79102 5.4668V6.12305H9.70215C9.36035 5.28906 8.52637 4.77637 7.52148 4.77637C5.76465 4.77637 4.53418 6.2666 4.53418 8.42676C4.53418 10.6143 5.77148 12.1318 7.57617 12.1318C8.62207 12.1318 9.4082 11.5781 9.79785 10.6279H9.87988C10.0439 11.5645 10.8506 12.1318 11.9443 12.1318C13.9131 12.1318 15.123 10.293 15.123 7.6543C15.123 3.68945 12.2109 1.09863 8.14355 1.09863C3.86426 1.09863 0.870117 4.01758 0.870117 8.40625ZM7.84277 10.9014C6.70801 10.9014 5.99707 9.95117 5.99707 8.44043C5.99707 6.93652 6.71484 5.98633 7.84961 5.98633C9.00488 5.98633 9.73633 6.92285 9.73633 8.41309C9.73633 9.93066 8.99805 10.9014 7.84277 10.9014Z"></path>
        </svg>
      );
    }
    case "files": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M12.5938 8.44043L7.54883 13.4854C6.26367 14.7773 4.54102 14.6475 3.44043 13.54C2.32617 12.4326 2.20312 10.7168 3.49512 9.4248L10.3926 2.52734C11.1445 1.77539 12.2725 1.63867 13.0039 2.37695C13.7422 3.11523 13.6055 4.22949 12.8535 4.98828L6.08594 11.7627C5.77832 12.0703 5.41602 11.9814 5.2041 11.7764C4.99902 11.5576 4.91016 11.2021 5.21777 10.8877L9.93457 6.1709C10.1738 5.93164 10.1875 5.58301 9.96191 5.35059C9.72949 5.13184 9.38086 5.13867 9.1416 5.37793L4.39746 10.1152C3.67285 10.8535 3.7002 11.9746 4.34961 12.624C5.05371 13.3281 6.12012 13.3145 6.8584 12.5762L13.6602 5.77441C14.9795 4.45508 14.9316 2.71875 13.7764 1.55664C12.6416 0.428711 10.8779 0.34668 9.55176 1.66602L2.61328 8.61816C0.883789 10.3477 1 12.8291 2.57227 14.4014C4.14453 15.9668 6.63281 16.0898 8.3623 14.3672L13.4414 9.28809C13.6738 9.0625 13.667 8.64551 13.4346 8.41992C13.209 8.18066 12.833 8.21484 12.5938 8.44043Z"></path>
        </svg>
      );
    }
    case "formula": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M5.04688 14.3604H11.2744C11.7324 14.3604 12.0537 14.0801 12.0537 13.6494C12.0537 13.2119 11.7324 12.9248 11.2744 12.9248H5.81934V12.8564L9.30566 8.82324C9.54492 8.57031 9.6748 8.29688 9.6748 8.0166C9.6748 7.73633 9.54492 7.45605 9.29883 7.20996L5.81934 3.2793V3.21094H11.2812C11.7393 3.21094 12.0537 2.92383 12.0537 2.48633C12.0537 2.05566 11.7393 1.77539 11.2812 1.77539H5.05371C4.34277 1.77539 3.95312 2.26758 3.95312 2.81445C3.95312 3.12207 4.07617 3.44336 4.33594 3.69629L8.15039 7.96875V8.05078L4.3291 12.4395C4.06934 12.6924 3.94629 13.0137 3.94629 13.3213C3.94629 13.8682 4.33594 14.3604 5.04688 14.3604Z"></path>
        </svg>
      );
    }
    case "last_edited_by": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 10.4229C6.05176 10.4229 4.54785 11.1133 3.83008 11.9131C2.90039 10.9082 2.33301 9.55469 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 9.55469 13.1064 10.9082 12.1699 11.9131C11.4521 11.1133 9.94824 10.4229 8 10.4229ZM8 9.30176C9.32617 9.30859 10.3516 8.18066 10.3516 6.71094C10.3516 5.33008 9.31934 4.18164 8 4.18164C6.6875 4.18164 5.6416 5.33008 5.64844 6.71094C5.65527 8.18066 6.68066 9.28809 8 9.30176Z"></path>
        </svg>
      );
    }
    case "last_edited_time": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.54102 8.91211H7.99316C8.30078 8.91211 8.54004 8.67285 8.54004 8.37207V3.8877C8.54004 3.58691 8.30078 3.34766 7.99316 3.34766C7.69238 3.34766 7.45312 3.58691 7.45312 3.8877V7.83203H4.54102C4.2334 7.83203 4.00098 8.06445 4.00098 8.37207C4.00098 8.67285 4.2334 8.91211 4.54102 8.91211Z"></path>
        </svg>
      );
    }
    case "multi_select": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"></path>
        </svg>
      );
    }
    case "people": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M10.9536 7.90088C12.217 7.90088 13.2559 6.79468 13.2559 5.38525C13.2559 4.01514 12.2114 2.92017 10.9536 2.92017C9.70142 2.92017 8.65137 4.02637 8.65698 5.39087C8.6626 6.79468 9.69019 7.90088 10.9536 7.90088ZM4.4231 8.03003C5.52368 8.03003 6.42212 7.05859 6.42212 5.83447C6.42212 4.63843 5.51245 3.68945 4.4231 3.68945C3.33374 3.68945 2.41846 4.64966 2.41846 5.84009C2.42407 7.05859 3.32251 8.03003 4.4231 8.03003ZM1.37964 13.168H5.49561C4.87231 12.292 5.43384 10.6074 6.78711 9.51807C6.18628 9.14746 5.37769 8.87231 4.4231 8.87231C1.95239 8.87231 0.262207 10.6917 0.262207 12.1628C0.262207 12.7974 0.548584 13.168 1.37964 13.168ZM7.50024 13.168H14.407C15.4009 13.168 15.7322 12.8423 15.7322 12.2864C15.7322 10.8489 13.8679 8.88354 10.9536 8.88354C8.04492 8.88354 6.17505 10.8489 6.17505 12.2864C6.17505 12.8423 6.50635 13.168 7.50024 13.168Z"></path>
        </svg>
      );
    }
    case "phone_number": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M5.09473 11.2021C7.11133 13.2188 9.55859 14.7705 11.5547 14.7705C12.4502 14.7705 13.2363 14.4629 13.8652 13.7656C14.2275 13.3555 14.4531 12.8838 14.4531 12.4121C14.4531 12.0498 14.3164 11.7012 13.9678 11.4551L11.8691 9.96484C11.541 9.73242 11.2607 9.62305 11.0146 9.62305C10.6934 9.62305 10.4131 9.80078 10.0986 10.1152L9.59961 10.6074C9.52441 10.6826 9.42871 10.71 9.33984 10.71C9.23047 10.71 9.12793 10.6689 9.05273 10.6348C8.62891 10.4023 7.89062 9.7666 7.20703 9.08984C6.53027 8.40625 5.89453 7.6748 5.66895 7.24414C5.62793 7.16895 5.58691 7.06641 5.58691 6.96387C5.58691 6.875 5.61426 6.7793 5.69629 6.7041L6.18164 6.20508C6.49609 5.88379 6.68066 5.60352 6.68066 5.28223C6.68066 5.03613 6.56445 4.7627 6.33203 4.42773L4.85547 2.34961C4.60254 2.00098 4.24707 1.85059 3.85742 1.85059C3.39941 1.85059 2.93457 2.05566 2.52441 2.44531C1.84766 3.08789 1.54688 3.88086 1.54688 4.76953C1.54688 6.76562 3.07812 9.18555 5.09473 11.2021Z"></path>
        </svg>
      );
    }
    case "relation": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M13.1475 10.5869V3.72363C13.1475 3.25195 12.833 2.93066 12.3477 2.93066H5.48438C5.02637 2.93066 4.70508 3.27246 4.70508 3.67578C4.70508 4.07227 5.05371 4.40039 5.46387 4.40039H7.89746L10.8438 4.30469L9.59961 5.39844L3.08496 11.9199C2.92773 12.0771 2.8457 12.2686 2.8457 12.46C2.8457 12.8564 3.20801 13.2256 3.61816 13.2256C3.80957 13.2256 3.99414 13.1504 4.15137 12.9932L10.6729 6.47168L11.7803 5.22754L11.6641 8.05762V10.6074C11.6641 11.0176 11.9922 11.373 12.4023 11.373C12.8057 11.373 13.1475 11.0312 13.1475 10.5869Z"></path>
        </svg>
      );
    }
    case "rollup": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M1.25293 6.82031C1.25293 9.88965 3.74805 12.3848 6.81738 12.3848C7.95898 12.3848 9.00488 12.0361 9.87988 11.4414L13.0244 14.5859C13.2158 14.7842 13.4824 14.873 13.749 14.873C14.3301 14.873 14.7471 14.4355 14.7471 13.8682C14.7471 13.5947 14.6514 13.3418 14.4668 13.1504L11.3428 10.0195C11.9922 9.12402 12.3818 8.0166 12.3818 6.82031C12.3818 3.75098 9.88672 1.25586 6.81738 1.25586C3.74805 1.25586 1.25293 3.75098 1.25293 6.82031ZM2.70215 6.82031C2.70215 4.55078 4.54102 2.70508 6.81738 2.70508C9.08691 2.70508 10.9326 4.55078 10.9326 6.82031C10.9326 9.08984 9.08691 10.9355 6.81738 10.9355C4.54102 10.9355 2.70215 9.08984 2.70215 6.82031Z"></path>
        </svg>
      );
    }
    case "select": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z"></path>
        </svg>
      );
    }
    case "status": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z"></path>
        </svg>
      );
    }
    case "unique_id": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M12.252 7.9209C13.7217 7.9209 14.7266 6.93652 14.7266 5.50781C14.7266 4.0791 13.7217 3.10156 12.252 3.10156C10.8232 3.10156 9.8457 4.0791 9.8457 5.50781C9.8457 6.93652 10.8301 7.9209 12.252 7.9209ZM2.00488 13.1367C2.45605 13.1367 2.72949 12.8496 2.72949 12.3848V5.83594L7.35059 12.5967C7.6377 12.9932 7.86328 13.1367 8.20508 13.1367C8.69043 13.1367 8.96387 12.8359 8.96387 12.3232V3.8877C8.96387 3.42285 8.69043 3.12891 8.23242 3.12891C7.78809 3.12891 7.50781 3.41602 7.50781 3.8877V10.4229L2.89355 3.66895C2.60645 3.25879 2.40137 3.12891 2.03906 3.12891C1.56738 3.12891 1.27344 3.4502 1.27344 3.94238V12.3848C1.27344 12.8496 1.55371 13.1367 2.00488 13.1367ZM12.252 6.84766C11.5615 6.84766 11.0898 6.30762 11.0898 5.50781C11.0898 4.70801 11.5615 4.16797 12.252 4.16797C12.9902 4.16797 13.4756 4.70801 13.4756 5.50781C13.4756 6.30762 12.9834 6.84766 12.252 6.84766ZM10.625 9.77344H13.9541C14.3506 9.77344 14.624 9.54102 14.624 9.14453C14.624 8.74805 14.3506 8.50195 13.9541 8.50195H10.625C10.2285 8.50195 9.96191 8.74805 9.96191 9.14453C9.96191 9.54102 10.2285 9.77344 10.625 9.77344Z"></path>
        </svg>
      );
    }
    case "url": {
      return (
        <svg
          role="graphics-symbol"
          viewBox="0 0 16 16"
          className="typesText notion-property-icon"
        >
          <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
        </svg>
      );
    }
    default: {
      return null;
    }
  }
};
