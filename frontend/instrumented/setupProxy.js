function cov_1ywqmjaifv() {
  var path = "C:\\Users\\firmi\\Desktop\\Easy_Stretcher\\frontend\\src\\setupProxy.js";
  var hash = "0ad1d8de6ff0be6e484c4ef806a935701b52c722";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\firmi\\Desktop\\Easy_Stretcher\\frontend\\src\\setupProxy.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 34
        },
        end: {
          line: 1,
          column: 66
        }
      },
      "1": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "2": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 10,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 31
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0ad1d8de6ff0be6e484c4ef806a935701b52c722"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ywqmjaifv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ywqmjaifv();
const {
  createProxyMiddleware
} = (cov_1ywqmjaifv().s[0]++, require('http-proxy-middleware'));
cov_1ywqmjaifv().s[1]++;

module.exports = function (app) {
  cov_1ywqmjaifv().f[0]++;
  cov_1ywqmjaifv().s[2]++;
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVQcm94eU1pZGRsZXdhcmUiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFwcCIsInVzZSIsInRhcmdldCIsImNoYW5nZU9yaWdpbiJdLCJzb3VyY2VzIjpbInNldHVwUHJveHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVQcm94eU1pZGRsZXdhcmUgfSA9IHJlcXVpcmUoJ2h0dHAtcHJveHktbWlkZGxld2FyZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApIHtcclxuICBhcHAudXNlKFxyXG4gICAgJy9hcGknLFxyXG4gICAgY3JlYXRlUHJveHlNaWRkbGV3YXJlKHtcclxuICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgfSlcclxuICApO1xyXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTs7Ozs7Ozs7O0FBZlosTUFBTTtFQUFFQTtBQUFGLDhCQUE0QkMsT0FBTyxDQUFDLHVCQUFELENBQW5DLENBQU47OztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0MsR0FBVCxFQUFjO0VBQUE7RUFBQTtFQUM3QkEsR0FBRyxDQUFDQyxHQUFKLENBQ0UsTUFERixFQUVFTCxxQkFBcUIsQ0FBQztJQUNwQk0sTUFBTSxFQUFFLHVCQURZO0lBRXBCQyxZQUFZLEVBQUU7RUFGTSxDQUFELENBRnZCO0FBT0QsQ0FSRCJ9