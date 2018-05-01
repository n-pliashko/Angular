const connectConfig = {
  apiHost: 'http://alpha.omnismain.com:3000/',
  imageLoadUrl: 'http://ssyii/web/site/images',
  urlHost: 'https://www.selectspecs.com/',
  yiiHost: 'https://yii.omnismain.com/',
  cdnUrl: 'https://s3-eu-west-1.amazonaws.com/ssresource-test'
}

connectConfig.urlApiHost =  connectConfig.apiHost + 'api/v.2/'

connectConfig.token = {
  getInfo: connectConfig.urlApiHost + 'token',
  getData: connectConfig.urlApiHost + 'token/data',
  getAccess: connectConfig.urlApiHost + 'token/access',
  groupEmulation: {
    url: connectConfig.urlApiHost + 'token/emulation/:group_id',
    method: 'GET',
    token: true
  },
  groupEmulationDisabling: {
    url: connectConfig.urlApiHost + 'token/emulation/cancel',
    method: 'GET',
    token: true
  },
  cancel: connectConfig.urlApiHost + 'token/cancel'
}

connectConfig.images = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'item_image/datatable',
    method: 'GET',
    token: true
  },
  ajaxUploadOrigin: {
    url: connectConfig.urlApiHost + 'item_image/upload/origin',
    method: 'POST',
    token: true
  },
  ajaxUploadView360: {
    url: connectConfig.urlApiHost + 'item_image/upload/view360',
    method: 'POST',
    token: true
  },
  ajaxGetListOrigin: {
    url: connectConfig.urlApiHost + 'item_image/list/origin',
    method: 'GET',
    token: true
  },
  ajaxGetListView360: {
    url: connectConfig.urlApiHost + 'item_image/list/view360',
    method: 'GET',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'item_image/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxSearch: {
    url: connectConfig.urlApiHost + 'item_image/search',
    method: 'GET',
    token: true
  }
}

connectConfig.gettext = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'gettext/datatable',
    method: 'GET',
    data: [
      'datatype'
    ],
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'gettext/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'gettext/id/:pk',
    method: 'POST',
    data: [
      'datatype'
    ],
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'gettext',
    method: 'PUT',
    token: true,
    data: [
      'datatype'
    ]
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'gettext/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetByDatatype: {
    url: connectConfig.urlApiHost + 'gettext/list/datatype/:datatype/lang/:lang',
    method: 'GET',
    token: true
  },
  ajaxGetByLabel: {
    url: connectConfig.urlApiHost + 'gettext/label/:label',
    method: 'GET',
    token: true
  },
  ajaxSearch: {
    url: connectConfig.urlApiHost + 'gettext/search',
    method: 'GET',
    token: true
  },
  ajaxUpsert: {
    url: connectConfig.urlApiHost + 'gettext/upsert',
    method: 'POST',
    token: true
  },
  edit: true,
  create: true,
  delete: false
}

connectConfig.delivery = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'delivery/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'payment/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'gettext/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'delivery',
    method: 'PUT',
    token: true,
  },
  editPage: true,
  delete: false,
  create: true
}

connectConfig.access = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'access/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'access/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'access/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'access',
    method: 'PUT',
    token: true,
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'access/id/:pk/group/:_group_id',
    method: 'DELETE',
    token: true,
  },
  getManagerList: {
    url: connectConfig.urlApiHost + 'access/manager/list',
    method: 'GET',
    token: true
  },
  edit: true,
  delete: true,
  create: true
}

connectConfig.count_word = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'gettext/word_count/datatype/:datatype/lang/:lang',
    method: 'GET',
    data: [
      'datatype',
      'lang'
    ],
    token: true
  },
  calculatedWords: {
    url: connectConfig.urlApiHost + 'gettext/word_count/lang/:lang',
    method: 'GET', data: [
      'lang'
    ],
    token: true
  }
}

connectConfig.items = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'item/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'item/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'item/id/:pk',
    method: 'POST',
    token: true
  },
  info: true,
  edit: false,
  create: false,
  delete: false
}

connectConfig.items_info = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'item_info/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'item_info/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'item_info',
    method: 'PUT',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'item_info/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'item_info/id/:pk',
    method: 'DELETE',
    token: true
  },
  info: false,
  edit: true,
  create: true,
  delete: false
}

connectConfig.translation = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'translation/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'translation/id/',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'translation/id/',
    method: 'POST',
    token: true
  }
}

connectConfig.payments = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'payment/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'payment/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'payment/id/:pk',
    method: 'POST',
    token: true
  },
  edit: true,
  delete: false
}

connectConfig.orders = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'order/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'order/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'order/id/:pk',
    method: 'POST',
    token: true
  },
  edit: true,
  delete: false,
  number: 'item_number'
}

connectConfig.profiles = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'profile/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'profile/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'profile/id/:pk',
    method: 'POST',
    token: true
  },
  edit: true,
  delete: false
}

connectConfig.users = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'user/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'user',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'user/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'user/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'user/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'user/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: false
}

connectConfig.managers = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'manager/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'manager',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'manager/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'manager/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'manager/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'manager/list',
    method: 'GET',
    token: true
  },
  getSubgroupsList: {
    url: connectConfig.urlApiHost + 'manager/subgroups/list',
    method: 'GET',
    token: true
  },
  getSubgroupsIds: {
    url: connectConfig.urlApiHost + 'manager/subgroups/ids',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.currencies = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'currency/datatable',
    // url: 'assets/dummy/currencies/table.json',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'currency/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'currency/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'currency',
    method: 'PUT',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'currency/id/:pk',
    method: 'DELETE',
    token: true
  },
  getList: "assets/api/promo/currencies.json",
  create: true,
  edit: true,
  delete: true
}

connectConfig.promo = {
  freeDelivery: {
    get: {
      url: '/assets/api/promo/free.json',
      method: 'GET',
      token: true
    },
    put: {
      url: '/assets/api/promo/free/:pk.json',
      method: 'PUT',
      token: true
    },
    post: {
      url: '/assets/api/promo/free',
      method: 'POST',
      token: true
    }
  },
  241: {
    get: {
      url: '/assets/api/promo/241.json',
      method: 'GET',
      token: true
    },
    put: {
      url: '/assets/api/promo/2for1/:pk.json',
      method: 'PUT',
      token: true
    },
    post: {
      url: '/assets/api/promo/2for1',
      method: 'POST',
      token: true
    }
  },
  active: {
    ajaxTable: {
      url: '/assets/api/promo/all.json',
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'PUT',
      token: true
    },
    ajaxDelete: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'DELETE',
      token: true
    },
    ajaxCreate: {
      url: '/assets/api/promo/all.json',
      method: 'POST',
      token: true
    },
    edit: true,
    create: true,
    delete: false
  },
  notactive: {
    ajaxTable: {
      url: '/assets/api/promo/all.json',
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'PUT',
      token: true
    },
    ajaxDelete: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'DELETE',
      token: true
    },
    ajaxCreate: {
      url: '/assets/api/promo/all.json',
      method: 'POST',
      token: true
    },
    edit: true,
    create: true,
    delete: false
  },
  closed: {
    ajaxTable: {
      url: '/assets/api/promo/all.json',
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'PUT',
      token: true
    },
    ajaxDelete: {
      url: '/assets/api/promo/action/:pk.json',
      method: 'DELETE',
      token: true
    },
    ajaxCreate: {
      url: '/assets/api/promo/all.json',
      method: 'POST',
      token: true
    },
    edit: true,
    create: true,
    delete: false
  },
  clearance: {
    ajaxTable: {
      url: connectConfig.urlApiHost + 'item/datatable',
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: connectConfig.urlApiHost + 'item/id/:pk',
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: connectConfig.urlApiHost + 'option/id/:pk',
      method: 'POST',
      token: true
    },
    ajaxDelete: {
      url: connectConfig.urlApiHost + 'item/id/:pk',
      method: 'DELETE',
      token: true
    },
    edit: true,
    create: false,
    delete: false
  },
  lens: {
    ajaxTable: {
      url: "/assets/api/promo/lens.json",
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: "/assets/api/promo/lens/:pk.json",
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: "/assets/api/promo/lens/:pk.json",
      method: 'POST',
      token: true
    },
    ajaxDelete: {
      url: "/assets/api/promo/lens/:pk.json",
      method: 'DELETE',
      token: true
    },
    edit: true,
    create: false,
    delete: false
  },
  tints: {
    ajaxTable: {
      url: "/assets/api/promo/tints.json",
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: "/assets/api/promo/tints/:pk.json",
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: "/assets/api/promo/tints/:pk.json",
      method: 'POST',
      token: true
    },
    ajaxDelete: {
      url: "/assets/api/promo/tints/:pk.json",
      method: 'DELETE',
      token: true
    },
    edit: true,
    create: false,
    delete: false
  },
  brand: {
    get: {
      url: '/assets/api/promo/brand.json',
      method: 'GET',
      token: true
    },
    put: {
      url: '/assets/api/promo/brand/:pk.json',
      method: 'PUT',
      token: true
    },
    post: {
      url: '/assets/api/promo/brand',
      method: 'POST',
      token: true
    },
    designerGet: {
      url: connectConfig.yiiHost + 'rest/items/default/get-designers',
      method: true,
      token: false
    },
    itemGet: {
      url: 'https://dev-yii.omnismain.com/rest/order/items/by-designer/',
      method: true,
      token: false
    }
  },
  combine: {
    ajaxTable: {
      url: '/assets/api/promo/combine.json',
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: '/assets/api/promo/combine/:pk.json',
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: '/assets/api/promo/combine/:pk.json',
      method: 'PUT',
      token: true
    },
    ajaxDelete: {
      url: '/assets/api/promo/combine/:pk.json',
      method: 'DELETE',
      token: true
    },
    ajaxCreate: {
      url: '/assets/api/promo/combine.json',
      method: 'POST',
      token: true
    },
    promo: {
      getList: '/assets/api/promo/combine/promo.json'
    },
    edit: true,
    create: true,
    delete: false
  },
  weekly: {
    ajaxTable: {
      url: connectConfig.urlApiHost + 'item/datatable',
      method: 'GET',
      token: true
    },
    ajaxGet: {
      url: connectConfig.urlApiHost + 'item/id/:pk',
      method: 'GET',
      token: true
    },
    ajaxUpdate: {
      url: connectConfig.urlApiHost + 'option/id/:pk',
      method: 'POST',
      token: true
    },
    ajaxDelete: {
      url: connectConfig.urlApiHost + 'item/id/:pk',
      method: 'DELETE',
      token: true
    },
    edit: false,
    create: false,
    delete: false
  },
  paymentSystemList: '/assets/api/promo/ps.json'
}

connectConfig.domains = {
  getAll: "/assets/api/promo/domains.json"
}

connectConfig.menuNav = {
  ajaxUpdate: {
    url: connectConfig.yiiHost + 'api/menu/main/add',
    method: 'POST',
    token: false
  },
  ajaxGet: {
    url: connectConfig.yiiHost + 'api/menu/main/get-menu/:pk',
    method: 'GET',
    token: false
  },
  ajaxDelete: {
    url: connectConfig.yiiHost + 'api/menu/main/delete-menu/:pk',
    method: 'DELETE',
  },
  getMenuFilters: connectConfig.yiiHost + 'api/menu/main/get-menu-filters',
  getMenuItems: connectConfig.yiiHost + 'api/menu/main/get-menus-content'
}

connectConfig.brandPage = {
  ajaxUpdate: {
    url: connectConfig.yiiHost + 'api/items/designers/update-specials',
    method: 'POST',
    token: false
  },
  getDesignerSpecials: connectConfig.yiiHost + 'api/items/designers/get-specials'
}

connectConfig.filters = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'filter/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'filter',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'filter/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'filter/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'filter/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'filter/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.menus = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'menu/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'menu',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'menu/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'menu/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'menu/id/:pk',
    method: 'DELETE',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.categories = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'categories/dependency/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'categories/dependency',
    method: 'POST',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'categories/dependency/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'categories/dependency',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'categories/dependency/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'categories/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.designers = {
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'designers/list',
    method: 'GET',
    token: true
  },
  ajaxUpsert: {
    url: connectConfig.urlApiHost + 'designers/upsert',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'designers/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxSearch: {
    url: connectConfig.urlApiHost + 'designers/search',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'designers/id/:pk',
    method: 'POST',
    token: true
  }
}

connectConfig.routes = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'route/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'route',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'route/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'route/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'route/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'route/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.menus = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'menu/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'menu',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'menu/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'menu/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'menu/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'menu/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: false
}

connectConfig.catalogue = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'catalogue/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'catalogue',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'catalogue/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'catalogue/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'catalogue/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'catalogue/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.components = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'component/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'component',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'component/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'component/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'component/id/:pk',
    method: 'DELETE',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'component/list',
    method: 'GET',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.groups = {
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'group/list',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'group/id/:pk',
    method: 'GET',
    token: true
  }
}

connectConfig.constants = {
  ajaxGetListByName: {
    url: connectConfig.urlApiHost + 'constant/:constant_name',
    method: 'GET',
    token: true
  },
  ajaxGetList: {
    url: connectConfig.urlApiHost + 'constant/list',
    method: 'GET',
    token: true
  },
}

connectConfig.country_restrictions = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'country_restriction/datatable',
    method: 'GET',
    token: true
  },
  ajaxCreate: {
    url: connectConfig.urlApiHost + 'country_restriction ',
    method: 'PUT',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'country_restriction/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: connectConfig.urlApiHost + 'country_restriction/id/:pk',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: connectConfig.urlApiHost + 'country_restriction/id/:pk',
    method: 'DELETE',
    token: true
  },
  create: true,
  edit: true,
  delete: true
}

connectConfig.yiiRequest = {
  getDesigners: connectConfig.yiiHost + 'rest/items/default/get-designers',
  getMainCategories: connectConfig.yiiHost + 'rest/items/default/get-main-categories'
}

connectConfig.trash = {
  ajaxTable: {
    url: connectConfig.urlApiHost + 'trash/datatable',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: connectConfig.urlApiHost + 'trash/id/:pk',
    method: 'GET',
    token: true
  },
  ajaxRestore: {
    url: connectConfig.urlApiHost + 'trash/restore/id/:pk',
    method: 'POST',
    token: true
  },
  info: true,
  edit: false,
  create: false,
  delete: false
}

connectConfig.promoConf = {
  get: '/assets/api/activities/promos.json'
}

connectConfig.vat = {
  ajaxTable: {
    url: '/assets/api/vat/countries.json',
    method: 'GET',
    token: true
  },
  ajaxGet: {
    url: '/assets/api/vat/:pk.json',
    method: 'GET',
    token: true
  },
  ajaxUpdate: {
    url: '/assets/api/vat/:pk.json',
    method: 'PUT',
    token: true
  },
  ajaxCreate: {
    url: '/assets/api/vat/:pk.json',
    method: 'POST',
    token: true
  },
  ajaxDelete: {
    url: '/assets/api/vat/:pk.json',
    method: 'DELETE',
    token: true
  },
  defaultGet: '/assets/api/vat/data.json',
  defaultPut: '/assets/api/vat/data.json',
  edit: true,
  create: false,
  delete: false
}

module.exports = connectConfig;
